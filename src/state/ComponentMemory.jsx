import { sculptureList } from './Data.jsx'

export default function ComponentMemory() {
    let index = 0;
    let sculpture = sculptureList[index];
    
    return(
        <div className='p-10'>
            <button className='btn btn-outline btn-primary mb-2'>Next</button>
            <h2 className='text-2xl'><i>{sculpture.name}</i></h2>
            <h3 className='mb-2'>({index + 1} of {sculptureList.length})</h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                style={{width: 150}}
            />
            <p className='mt-2' style={{width: 600}}>{sculpture.description}</p>
        </div>
    );
}