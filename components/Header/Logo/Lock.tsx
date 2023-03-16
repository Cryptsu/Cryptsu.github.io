import { theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";
import { LockLockedIcon } from "@/components/Icons";

const Lock = () => {
  return (
    <>
      <CSSWrapper as={LockLockedIcon} viewBox="1 0 6 6" />
    </>
  )
}

const CSSWrapper = styled("svg", 
  {
    fill: theme.colors.logoText,
    width: 24,
    height: 28,
  }
)

export default Lock;