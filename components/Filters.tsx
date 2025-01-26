import { FiltersInterface } from "@/interfaces/InterfacesWorkouts";

const Filters: React.FC<FiltersInterface> = ({ equipmentFilter, setEquipmentFilter }) => {

    return (
        <div className="input-wrapper">
            <label className="text-lg">Equipment:</label>
            <input
                type="text"
                value={equipmentFilter}
                onChange={(e) => setEquipmentFilter(e.target.value)}
                className="w-64 p-2 border border-gray-300 rounded"
                placeholder="Enter equipment"
            />
        </div>
    );
};

export default Filters;