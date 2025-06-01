import React from 'react';
import './InfoBlock.css';

const InfoBlock = ({ title, children, side }) => {
    /* если side есть → добавляем модификатор для flex-раскладки */
    const withSide = Boolean(side);

    return (
        <section className={`info-block${withSide ? ' info-block--with-side' : ''}`}>

            <div className="info-block__body">
                {withSide && (
                    <div className="info-block__side">
                        {side}
                    </div>
                )}
                <div className="info-block__content">
                    <h3 className="info-block__title">{title}</h3>

                    {children}
                </div>
            </div>
        </section>
    );
};

export default InfoBlock;