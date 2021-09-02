import React from "react";

export const isBrowser = typeof window !== "undefined";

export const getRelativeCoordinates = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  referenceElement: React.RefObject<HTMLElement>
) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.current.offsetLeft,
    top: referenceElement.current.offsetTop,
    width: referenceElement.current.clientWidth,
    height: referenceElement.current.clientHeight,
  };

  let reference = referenceElement.current.offsetParent as HTMLElement;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const formatMoney = (price: number | string): string => {
  // @ts-ignore
  return `$${(parseInt(price) / 100).toFixed(2)}`;
};

export function centsToPrice(cents: number, trailing = false) {
  const price = cents / 100;

  if (!trailing && price % 1 === 0) {
    return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  } else {
    const parts = price.toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${parts.join(".")}`;
  }
}

export function hasObject(recs, vals) {
  if (!recs) return false;

  return recs.some(function (obj) {
    for (var x in obj) {
      if (x in vals && obj[x] != vals[x]) {
        return false;
      }
    }
    return true;
  });
}
