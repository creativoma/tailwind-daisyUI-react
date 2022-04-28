export default function ToggleTheme() {

    const htmlTheme = document.querySelector('html');
    const cambiarTema = () => {
        if (htmlTheme.getAttribute('data-theme') === 'dark') {
            htmlTheme.setAttribute('data-theme', 'light');
        } else {
            htmlTheme.setAttribute('data-theme', 'dark');
        }
    }
    return(
        <input type="checkbox" className="toggle" onClick={cambiarTema}></input>
    )
}