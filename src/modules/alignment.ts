type CenterDivResult = {
    top: number;
    left: number;
  };
  
  export const centerDiv = (divWidth: number, divHeight: number): CenterDivResult => {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Calculate the top and left values to center the div
    const top = (viewportHeight - divHeight) / 2;
    const left = (viewportWidth - divWidth) / 2;
  
    return { top, left };
  };
  