import { NextNode } from '@/types/next.d';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "@/components/MDXComponents/Headings";
import Paragraph from '@/components/MDXComponents/Paragraph';
import Blockquote from '@/components/MDXComponents/Blockquote';
import ParsedLink from '@/components/MDXComponents/ParsedLink';
import CodeInline from '@/components/MDXComponents/CodeInline';
import CodeBlock from '@/components/MDXComponents/CodeBlock';
import UnorderedList from '@/components/MDXComponents/Lists/UnorderedList';
import OrderedList from '@/components/MDXComponents/Lists/OrderedList';
import ListItem from '@/components/MDXComponents/Lists/ListItem';
import BlogImg from '@/components/MDXComponents/BlogImg';
import MathInline from '@/components/MDXComponents/MathInline';
import MathBlock from '@/components/MDXComponents/MathBlock';
import Table from '@/components/MDXComponents/Table';

export type MDXComponentsConfigType = {
  [componentName: string]: {
    replacedElement: NextNode,
    classNames?: string[],
  }[]
};

// TODO: Some of the configs here
// depends on how next-mdx-remote
// and their plugins generate code,
// so some class name might not
// be true in the future.
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
  li: [{replacedElement: ListItem}],
  table: [{replacedElement: Table}],

  // BlogImg can be its own thing :)
  BlogImg: [{replacedElement: BlogImg}],
};

export default MDXComponentsConfig;