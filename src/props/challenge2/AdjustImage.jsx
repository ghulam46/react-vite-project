/* eslint-disable react/prop-types */
import { getImageUrl } from '../challenge2/utils.jsx';
 
function Avatar({ person, size }) {
    let imgThumbnail = 's';
    if(size > 90) {
        imgThumbnail = 'b';
    }
 return (
    <div className='text-center py-5'>
        <img
            className="avatar rounded-full"
            src={getImageUrl(person, imgThumbnail)}
            alt={person.name}
            width={size}
            height={size}
        />
    </div>
 );
}
 
export default function AdjustImage() {
 return (
    <>
        <Avatar
            size={40}
            person={{ 
                name: 'Gregorio Y. Zara', 
                imageId: '7vQD0fP'
            }}
        />
        <Avatar
            size={140}
            person={{ 
                name: 'Mc Gregor', 
                imageId: '7vQD0fP'
            }}
        />
    </>
 );
}