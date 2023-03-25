import { NextNode } from '@/types/next.d';
import H1 from '@/components/MDXComponents/Headings/H1';
import H2 from '@/components/MDXComponents/Headings/H2';
import H3 from '@/components/MDXComponents/Headings/H3';
import H4 from '@/components/MDXComponents/Headings/H4';
import H5 from '@/components/MDXComponents/Headings/H5';
import H6 from '@/components/MDXComponents/Headings/H6';
import Paragraph from '@/components/MDXComponents/Paragraph';
import Blockquote from '@/components/MDXComponents/Blockquote';
import ParsedLink from '@/components/MDXComponents/ParsedLink';
import CodeInline from '@/components/MDXComponents/CodeInline';
import CodeBlock from '@/components/MDXComponents/CodeBlock';
import UnorderedList from '@/components/MDXComponents/UnorderedList';
import OrderedList from '@/components/MDXComponents/OrderedList';
import BlogImg from '@/components/MDXComponents/BlogImg';
import MathInline from '@/components/MDXComponents/MathInline';
import MathBlock from '@/components/MDXComponents/MathBlock';

export type MDXComponentsConfigType = {
  [componentName: string]: {
    replacedElement: NextNode,
    classNames?: string[],
  }[]
};

const MDXComponentsConfig: MDXComponentsConfigType = {
  h1: [{replacedElement: H1}],
  h2: [{replacedElement: H2}],
  h3: [{replacedElement: H3}],
  h4: [{replacedElement: H4}],
  h5: [{replacedElement: H5}],
  h6: [{replacedElement: H6}],

  p: [{replacedElement: Paragraph}],
  blockquote: [{replacedElement: Blockquote}],
  a: [{replacedElement: ParsedLink}],

  code: [
    {replacedElement: CodeBlock, classNames: ["code-highlight"]},
    {replacedElement: CodeInline}
  ],

  ul: [{replacedElement: UnorderedList}],
  ol: [{replacedElement: OrderedList}],
  img: [{replacedElement: BlogImg}],
  span: [{replacedElement: MathInline, classNames: ["math-inline", "math"]}],
  div: [{replacedElement: MathBlock, classNames: ["math-display", "math"]}],

  // BlogImg can be its own thing :)
  BlogImg: [{replacedElement: BlogImg}],
};

export default MDXComponentsConfig;