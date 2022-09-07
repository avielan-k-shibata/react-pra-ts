import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
type Props = {
    c_name: string;
    as: string;
    children?: ReactNode;
};

export const IO = ({ c_name, as, children }: Props) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    const p_class = `${c_name} inview`

    switch (as) {
        case "span":
            return <span className={inView ? p_class : c_name} ref={ref}>{children}</span>
        case "p":
            return <p className={inView ? p_class : c_name} ref={ref}>{children}</p>
        default:
            return <div className={inView ? p_class : c_name} ref={ref}>{children}</div>
    }

}  