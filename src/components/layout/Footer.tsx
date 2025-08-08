import "@/styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} My UI Test. All rights reserved.</p>
        </footer>
    );
}
