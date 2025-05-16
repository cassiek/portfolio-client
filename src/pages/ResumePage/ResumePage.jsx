import "./ResumePage.scss";

const API_URL = import.meta.env.VITE_HOSTED_URL;

function ResumePage() {
    return (
        <main className="resume-page">
            <section className="resume-page__content">
                <h3 className="resume-page__header">Resumé</h3>
                <object data={API_URL+`/Cassie Kumpula Software Engineer.pdf`} type="application/pdf" className="resume-page__pdf"></object> 
            </section>
        </main>
    )
};

export default ResumePage;
