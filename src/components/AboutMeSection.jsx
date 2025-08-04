export default function AboutMeSection() {
    return (
        <>
            <section id={"about"} className={"py-24 px-4 relative"}>
                {" "}
                <div classNmae={"container mx-auto max-w-5xl"}>
                    <h2 className={"text-3xl md:text-4xl font-bold mb-12 text-center"}>About  <span className={"text-primary"}>Me</span></h2>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 items-center"}>
                    <div classname={"space-y-6"}>
                      <h3 className={"text-2xl font-semibold"}>A Passionate Software Engineer </h3>
                      <p className={"text-muted-foreground"}>
                        I am a fresh graduate at SLIIT, with 2 years of professional experience in Software Engineering. I am a dynamic and fast-learning software developer with a strong academic background in Information Technology. Experienced in full-stack development with expertise in Java, MERN & MEAN stack.
                      </p>
                      <p className={"text-muted-foreground"}>
                         Former Intern Software Engineer - One Billion Technology
                          Trainee Software Engineer - SYIGEN Pvt Ltd
                      </p>
                    </div>
                </div>
            </section>
        </>
    )
}