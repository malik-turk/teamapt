import '../assets/styles/star-burst-lights.scss';

export default function StarburstLights() {
    const lights = new Array(10);
    lights.fill('light');

    return (
        <div className="outer">
            {lights.map((light, i) => (
                <span style={{ transform: `rotate(${i * 20}deg)` }} key={`${light}-${i}`} className="ray" />
            ))}
        </div>
    )
}
