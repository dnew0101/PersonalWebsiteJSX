import { Scroll } from "@react-three/drei"

const Section = (props) => {
    return (
        <section
            className="h-[80vh] flex flex-col justify-center p-10"
        >
            <div className="w-full flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-neutral-950 opacity-95 rounded-lg px-8 py-3 text-center border">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Overlay = () => {
    return (
        <Scroll html>
            <div className="w-screen">
                <Section>
                    <h1>
                        Hi, I'm <span class="nameSpan">David</span>.
                    </h1>
                    <br/>
                    <p>
                        This is my portfolio website!
                    </p>
                </Section>
            </div>
        </Scroll>
    );
}

export default Overlay;