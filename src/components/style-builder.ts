import {Elevation} from './elevation';
import {CSSProperties} from './css-type';
import {TextType} from './text/text-props';

export class StyleBuilder {

    private readonly style: CSSProperties = {};
    private boxShadow: string | undefined;
    private textType: TextType | undefined;

    constructor(style?: CSSProperties) {
        if (style) {
            this.style = {
                ...style,
            };
        }
    }

    private getBoxShadow = (elevation?: Elevation): string | undefined => {
        switch (elevation) {
            case Elevation.ONE: {
                return '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
            }
            case Elevation.TWO: {
                return '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
            }
            case Elevation.THREE: {
                return '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
            }
            case Elevation.FOUR: {
                return '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
            }
            // the default is Elevation.NONE
            default: {
                return undefined;
            }
        }
    };

    public withElevation = (elevation?: Elevation): StyleBuilder => {
        if (elevation) {
            this.boxShadow = this.getBoxShadow(elevation);
        }
        return this;
    };

    public withTextType = (textType?: TextType): StyleBuilder => {
        if (textType) {
            this.textType = textType;
        }
        return this;
    };

    public withAlignment = (alignment?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'): StyleBuilder => {
        if (alignment) {
            this.style.alignItems = alignment;
        }
        return this;
    }

    public build = (): CSSProperties => {
        this.style.boxShadow = this.boxShadow;
        if (this.textType) {
            this.style.fontSize = this.getFontSize(this.textType);
        }
        return this.style;
    };

    private getFontSize(textType: TextType) {
        switch (textType) {
            case TextType.title: {
                return '1.5rem';
            }
            case TextType.body: {
                return '1rem';
            }
            case TextType.h1: {
                return '2.5rem';
            }
            case TextType.h2: {
                return '2rem';
            }
            case TextType.h3: {
                return '1.75rem';
            }
            case TextType.h4: {
                return '1.5rem';
            }
            case TextType.h5: {
                return '1.25rem';
            }
            case TextType.h6: {
                return '1rem';
            }
            case TextType.label: {
                return '0.875rem';
            }
        }
    }
}