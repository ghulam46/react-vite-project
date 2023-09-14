/* eslint-disable react/prop-types */
import { getImageUrl } from './utils.jsx';

function Profile({
    imageId,
    name,
    professions,
    awards,
    discovery,
    imageSize = 70
}){
    return(
        <>
            <section className="profile card shadow-xl card-body w-1/2 mx-auto">
                <h2>{name}</h2>
                <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={imageSize}
                height={imageSize}
                />
                <ul>
                <li>
                    <b>Profession: </b> 
                    {professions}
                </li>
                <li>
                    <b>Awards: {awards.length} </b> 
                    ({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery}
                </li>
                </ul>
            </section>
        </>
    );
}

export default function ProfileProps() {
  return (
    <div>
      <h1 className='text-4xl text-center mt-5'>Notable Scientists</h1>
      <Profile 
        imageId='szV5sdG'
        name='Maria Skłodowska-Curie'
        professions='physicist and chemist'
        discovery='polonium (chemical element)'
        awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
        ]}
      />
      <Profile 
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        professions='geochemist'
        discovery='a method for measuring carbon dioxide in seawater'
        awards={[
            'Miyake Prize for geochemistry',
            'Tanaka price'
        ]}
      />
    </div>
  );
}