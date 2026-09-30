import '../assets/Navbar.css'

export default function About() {
    const reactSkill = 'react';
    const flutterSkill = 'flutter';
    const laravelSkill = 'laravel';

    return (
        <>
            <section className="about">
      <p className='skills'>I'm Capable of doing projects using {reactSkill}, {flutterSkill}, {laravelSkill}</p>
      <p className="skills">{laravelSkill} and {reactSkill} are for websites</p>
      <p className="skills">{flutterSkill} is for mobile applicstions</p>
            </section>
        </>
    )
}