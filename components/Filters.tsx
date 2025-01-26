import styled from "styled-components";
import { FiltersInterface } from "@/interfaces/InterfacesWorkouts";

const Filters: React.FC<FiltersInterface> = ({ equipmentFilter, setEquipmentFilter }) => {
    return (
        <InputWrapper>
            <Label>Equipment:</Label>
            <StyledInput
                type="text"
                value={equipmentFilter}
                onChange={(e) => setEquipmentFilter(e.target.value)}
                placeholder="Enter equipment"
                data-testid="equipment-filter"
            />
        </InputWrapper>
    );
};

export default Filters;

// Styled components
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    `;

    const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    `;

    const StyledInput = styled.input`
    width: 16rem;
    padding: 0.75rem;
    border: 2px solid #4a4a4a;
    border-radius: 8px;
    background-color: #1f1f1f;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    ::placeholder {
        color: #a1a1a1;
    }

    &:focus {
        border-color: #ffdd57;
        box-shadow: 0 0 10px rgba(255, 221, 87, 0.5);
    }
`;
