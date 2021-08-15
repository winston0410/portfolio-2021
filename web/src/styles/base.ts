const fontScale = {
	xs: 1,
	sm: 1.618,
	md: 3.236,
	lg: 5.236
};

const baseValue = 16;

const getFont = (scale: number) => {
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

const getMarginBottom = (scale: number) => {
    return {
        marginBottom: `${scale * baseValue / 2}px`,
    }
}

export const xsMb = getMarginBottom(fontScale.xs);
export const smMb = getMarginBottom(fontScale.sm);
export const mdMb = getMarginBottom(fontScale.md);
export const lgMb = getMarginBottom(fontScale.lg);

const getPadding = (scale: number) => {
    return {

    }
}
