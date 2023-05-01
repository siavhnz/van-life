import { useOutletContext } from "react-router-dom";

const HostVanDetailPhotos = () => {
    const van = useOutletContext();
    return <img src={van.imageUrl} alt={van.name} style={
        {
            borderRadius: "0.25rem",
            marginTop: "1.75rem",
            width: "6.5rem"
        }}
    />
}

export default HostVanDetailPhotos;