import "./NavbarDigimon.css"

interface NavbarDigimonProps {
    searchValue: string;
    levelValue: string;
    onSearchChange: (value: string) => void;
    onLevelChange: (value: string) => void;
}

export const NavbarDigimon = ({ searchValue, levelValue, onSearchChange, onLevelChange }: NavbarDigimonProps) => {
    return (
        <form className="DigiNavbar" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Nombre..."
            />

            <select
                aria-label="Filtrar por nivel"
                value={levelValue}
                onChange={(e) => onLevelChange(e.target.value)}
            >
                <option value="">Todos los niveles</option>
                <option value="In Training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>

            <button type="submit">Buscar</button>
        </form>
    )
}

export default NavbarDigimon