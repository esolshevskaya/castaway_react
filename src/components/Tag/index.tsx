import style from './style.module.css';

import type { TTagProps } from './types';

export const Tag = ({tagText}: TTagProps) => (
    <div className={style['tag']}>{tagText}</div>
)