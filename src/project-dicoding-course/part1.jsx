import DicodingLogo from '../assets/dicoding-logo.png';

export default function Part1() {
    return (
        <div className="text-white">
            <h1>Biodata Perusahaan</h1>
            <ol>
                <li>Nama: Dicoding Indonesia</li>
                <li>Bidang: Education</li>
                <li>Tagline: Decode Ideas, Discover Potential.</li>
                <img src={DicodingLogo} alt="" />
            </ol>
        </div>
    );
}
        