const fontScale = {
	xs: 1,
	sm: 1.618,
	md: 3.236,
	lg: 5.236
};

const getFont = (scale: number) => {
	const baseValue = 16;
	return {
		fontSize: `${scale * baseValue}px`,
		fontWeight: 'normal',
		fontFamily: ''
	};
};

export const xsFont = getFont(fontScale.xs);
export const smFont = getFont(fontScale.sm);
export const mdFont = getFont(fontScale.md);
export const lgFont = getFont(fontScale.lg);

//  const getMargin = (scale: number) => {
    //  return {
        
    //  }
//  }
