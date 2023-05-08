import { useEffect, useRef, useState, useLayoutEffect } from "react";
import useOnce from "@/hooks/useOnce";
import Style from "@/components/Style";
import { config, theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type _404Props = PropsWithChildren<{

}>

const ERR_MARGIN_LEFT = 0;
const ERR_MARGIN_RIGHT = 0;
const ERR_MARGIN_TOP = 32;
const ERR_MARGIN_BOTTOM = 32;

const randPosVelocity = (parentSize: number) => {
  return (Math.random() + 0.1) / 800 * parentSize;
}

const _404 = ({children, ...otherProps}: _404Props) => {
  const [ isUserStay, setIsUserStay ] = useState<boolean>(false);
  const [ itemState, setItemState ] = useState<number[]>([
    0,    // velocityX (in px)
    0,    // velocityY (in px)
    0,    // positionX (in px)
    0,    // positionY (in px)
  ]);

  const errItemRef = useRef<HTMLElement>(null);
  const parentRef = useRef<HTMLElement>(null);

  const Align404CenterFn = () => {
    // Element changing
    let parentItem = parentRef.current;
    let errItem = errItemRef.current;
    if (!parentItem || !errItem)
      return;

    let parentWidth = parentItem.offsetWidth;
    let parentHeight = parentItem.offsetHeight;
    let errWidth = errItem.offsetWidth;
    let errHeight = errItem.offsetHeight;

    // parentItem
    parentItem.style.minHeight = `
      calc(${errHeight + ERR_MARGIN_TOP + ERR_MARGIN_BOTTOM}px)
    `;
    parentItem.style.minWidth = `
      calc(${errWidth + ERR_MARGIN_LEFT + ERR_MARGIN_RIGHT}px)
    `;

    // We just set position when user's not waiting
    if (!isUserStay) {
      let velocityX = randPosVelocity(parentWidth);
      let velocityY = randPosVelocity(parentHeight);
      let positionX = (parentWidth   - (errWidth   + ERR_MARGIN_LEFT + ERR_MARGIN_RIGHT  )) / 2;
      let positionY = (parentHeight  - (errHeight  + ERR_MARGIN_TOP  + ERR_MARGIN_BOTTOM )) / 2;
      itemState[0] = velocityX;
      itemState[1] = velocityY;
      itemState[2] = positionX;
      itemState[3] = positionY;
      setItemState(itemState);

      // Using clamp function to make sure there's no artifacts or sth...
      errItem.style.top = `
        clamp(
          -${ERR_MARGIN_TOP}px,
          calc(50% - ${parentHeight/2 - positionY}px),
          calc(100% - ${errHeight + ERR_MARGIN_BOTTOM}px)
        )
      `;
  
      errItem.style.left = `
        clamp(
          -${ERR_MARGIN_LEFT}px,
          calc(50% - ${parentWidth/2 - positionX}px),
          calc(100% - ${errWidth + ERR_MARGIN_RIGHT}px)
        )
      `;
    }
  }

  useLayoutEffect(() => {
    Align404CenterFn();
    window.addEventListener('resize', Align404CenterFn);
    return (
      () => window.removeEventListener('resize', Align404CenterFn)
    )
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsUserStay(true);
    }, 20000);
    return () => clearTimeout(timeout);
  }, []);

  useLayoutEffect(() => {
    if (isUserStay && parentRef.current && errItemRef.current) {
      const interval = setInterval(() => {
        // Element changing
        let parentItem = parentRef.current;
        let errItem = errItemRef.current;
        if (!parentItem || !errItem)
          return () => clearInterval(interval);

        let errWidth = errItem.offsetWidth;
        let errHeight = errItem.offsetHeight;
        let parentWidth = parentItem.offsetWidth;
        let parentHeight = parentItem.offsetHeight;

        let [
          velocityX,
          velocityY,
          positionX,
          positionY,
        ] = itemState;

        let leftX   = positionX + ERR_MARGIN_LEFT;
        let topY    = positionY + ERR_MARGIN_TOP;
        let rightX  = leftX + errWidth;
        let bottomY = topY + errHeight;

        // Update velocity this way to account for
        // window resizing too.
        if (rightX + velocityX >= parentWidth) 
          velocityX = -randPosVelocity(parentWidth);
        else if (leftX + velocityX <= 0)
          velocityX = randPosVelocity(parentWidth);

        if (bottomY + velocityY >= parentHeight)
          velocityY = -randPosVelocity(parentHeight);
        else if (topY + velocityY <= 0)
          velocityY = randPosVelocity(parentHeight);

        // Update position
        positionX += velocityX;
        positionY += velocityY;
        
        // Using clamp function to make sure there's no artifacts or sth...
        errItem.style.top = `
          clamp(
            -${ERR_MARGIN_TOP}px,
            ${positionY}px,
            calc(100% - ${errHeight + ERR_MARGIN_BOTTOM}px)
          )
        `;
    
        errItem.style.left = `
          clamp(
            -${ERR_MARGIN_LEFT}px,
            ${positionX}px,
            calc(100% - ${errWidth + ERR_MARGIN_RIGHT}px)
          )
        `;

        // Update state (without re-render)
        itemState[0] = velocityX;
        itemState[1] = velocityY;
        itemState[2] = positionX;
        itemState[3] = positionY;
      }, 5);

      return () => clearInterval(interval);
    }
  /* eslint-disable react-hooks/exhaustive-deps */}, [isUserStay]);

  return (
    <Style ref={parentRef} style={_404Styles} {...otherProps}>
      <Style ref={errItemRef} style={ErrorWrapperStyles}>
        <Style style={Text404Styles}>
          {TxtConst.TXT_404}
        </Style>
        <Style style={TextPageNotFoundStyles}>
          {TxtConst.TXT_PAGE_NOT_FOUND}
        </Style>
      </Style>
    </Style>
  )
}

const _404Styles: CSS = {
  position: "relative",
  overflowX: "auto",
  height: "100%",
  fontFamily: theme.fonts.global,
};

const ErrorWrapperStyles: CSS = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  marginLeft: ERR_MARGIN_LEFT,
  maringRight: ERR_MARGIN_RIGHT,
  marginTop: ERR_MARGIN_TOP,
  marginBottom: ERR_MARGIN_BOTTOM,

  paddingBottom: "2em",
  paddingLeft: "3em",
  paddingRight: "3em",
  '@medium': {
    paddingBottom: "2em",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },

  borderColor: theme.colors.borderGeneral,
  borderStyle: "dashed",
  borderWidth: "0.5em",
  borderRadius: 32,

  width: "fit-content",
}

const Text404Styles: CSS = {
  height: "1.0625em",
  fontSize: theme.fontSizes.err,
  fontWeight: theme.fontWeights.extrabold,
  letterSpacing: theme.letterSpacings.h0,
  color: theme.colors.error,
  textAlign: "center",
}

const TextPageNotFoundStyles: CSS = {
  fontSize: theme.fontSizes.h2,
  fontWeight: theme.fontWeights.h2,
  letterSpacing: theme.letterSpacings.h2,
  color: theme.colors.textGeneral,
  textAlign: "center",
  textDecoration: "underline",
}

export default _404;