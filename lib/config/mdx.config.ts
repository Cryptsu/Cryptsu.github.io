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
};

export default MDXComponentsConfig;