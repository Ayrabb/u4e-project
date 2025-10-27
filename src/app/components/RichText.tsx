"use client";

import Image from 'next/image';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';
import React from 'react';

const builder = imageUrlBuilder(client);

interface SanityReference {
    _ref: string;
    _type: string;
}

function urlFor(source: { asset?: SanityReference }) {
    return builder.image(source);
}

interface Block {
    _key: string;
    _type: string;
    style?: string;
    children?: Array<{
        _key: string;
        _type: string;
        marks: string[];
        text: string;
    }>;
    markDefs?: Array<{
        _key: string;
        _type: string;
        href?: string;
    }>;
    asset?: {
        _ref: string;
        _type: string;
    };
}

interface PortableTextProps {
    blocks: Block[];
}

const RichText = ({ blocks }: PortableTextProps) => {
    const renderMark = (text: string, marks: string[], markDefs: Block['markDefs'] = []) => {
        let content: React.ReactNode = text;

        // Apply marks in reverse to handle nested marks
        [...marks].reverse().forEach(mark => {
            const markDef = markDefs?.find(def => def._key === mark);

            if (markDef?._type === 'link') {
                content = (
                    <Link
                        href={markDef.href || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#044D28] hover:text-[#033d20] underline"
                    >
                        {content}
                    </Link>
                );
            } else {
                switch (mark) {
                    case 'strong':
                        content = <strong>{content}</strong>;
                        break;
                    case 'em':
                        content = <em>{content}</em>;
                        break;
                    case 'code':
                        content = <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{content}</code>;
                        break;
                    case 'underline':
                        content = <u>{content}</u>;
                        break;
                    default:
                        break;
                }
            }
        });

        return content;
    };

    const renderBlock = (block: Block) => {
        switch (block._type) {
            case 'block':
                switch (block.style) {
                    case 'h1':
                        return (
                            <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
                                {block.children?.map(child => (
                                    <span key={child._key}>
                                        {renderMark(child.text, child.marks, block.markDefs)}
                                    </span>
                                ))}
                            </h1>
                        );
                    case 'h2':
                        return (
                            <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">
                                {block.children?.map(child => (
                                    <span key={child._key}>
                                        {renderMark(child.text, child.marks, block.markDefs)}
                                    </span>
                                ))}
                            </h2>
                        );
                    case 'h3':
                        return (
                            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                                {block.children?.map(child => (
                                    <span key={child._key}>
                                        {renderMark(child.text, child.marks, block.markDefs)}
                                    </span>
                                ))}
                            </h3>
                        );
                    case 'blockquote':
                        return (
                            <blockquote className="border-l-4 border-[#044D28] pl-4 italic text-gray-700 my-6">
                                {block.children?.map(child => (
                                    <span key={child._key}>
                                        {renderMark(child.text, child.marks, block.markDefs)}
                                    </span>
                                ))}
                            </blockquote>
                        );
                    default:
                        return (
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {block.children?.map(child => (
                                    <span key={child._key}>
                                        {renderMark(child.text, child.marks, block.markDefs)}
                                    </span>
                                ))}
                            </p>
                        );
                }
            case 'image':
                if (block.asset?._ref) {
                    return (
                        <div className="my-8 relative aspect-[3/2] w-full">
                            <Image
                                src={urlFor(block).url()}
                                alt="Story image"
                                fill
                                className="object-cover rounded-xs"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            />
                        </div>
                    );
                }
                return null;
            default:
                return null;
        }
    };

    return (
        <div className="prose prose-lg max-w-none">
            {blocks.map(block => (
                <div key={block._key}>{renderBlock(block)}</div>
            ))}
        </div>
    );
};

export default RichText;