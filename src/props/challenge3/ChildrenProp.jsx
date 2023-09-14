export default function ChildrenProp() {
    return(
        <div className="mx-auto card card-body shadow-xl w-1/2">
            <div className="border-2 w-20 rounded-xl p-3">
                <h1>Photo</h1>
                <img 
                    className="avatar rounded-xl"
                    src="https://i.imgur.com/OKS67lhm.jpg" 
                    alt="profile avatar" 
                    width={70}
                    height={70}
                />
            </div>
            <div className="border-2 w-[550px] rounded-xl text-center p-5">
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </div>
        </div>
    );
}