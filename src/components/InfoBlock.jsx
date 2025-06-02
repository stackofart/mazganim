import './InfoBlock.css';

export default function InfoBlock({ title, children, image }) {
    const withSide = Boolean(image);

    return (
        <section className={`info-block ${withSide ? 'info-block--with-side' : ''}`}>
            {title && <h2 className="info-block__title">{title}</h2>}

            <div className="info-block__body">
                <article className="info-block__content">{children}</article>

                {withSide && (
                    <figure className="info-block__image-wrapper">
                        {/* любой React-element: <img>, <svg>, <Canvas3D /> … */}
                        {image}
                    </figure>
                )}
            </div>
        </section>
    );
}