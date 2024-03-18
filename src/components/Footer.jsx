import { format } from "date-fns";

export default function Footer() {
    const currentYear = format(new Date(), 'yyyy');
    return (
        <footer>&copy; {currentYear} Buddha Gurung</footer>
    );
}