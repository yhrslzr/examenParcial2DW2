import "./NavbarDigimon.css"

export const NavbarDigimon = ({ onChange }: { onChange: (value: string) => void }) => {
    return (
        <div className= "DigiNavbar">
            <input 
                type="text"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Nombre..."
            />

            <select>
                <option value="">Todos los niveles</option>
                <option value="In Training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>

            <input
                type="submit"
                value="Buscar"
            />
        </div>
    )
}

export default NavbarDigimon