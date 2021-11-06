import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const arboreal = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/arboreal-show-case.png"
                experienceType="PROJECT"
                header="Arboreal"
                role="Project manager"
                timeframe="January 2019 - May 2019"
                text="Forest measurements with your mobile phone. Arboreal uses AR technology to transform 
                    the forest into a digital variant where you can perform measurements in real time. 
                    As a part of a school project, I worked alongside four others to help the start-up company 
                    Arboreal design a prototype of the full user flow for their service through a 
                    process called Design Build Test (DBT).">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="Introduction"/>
                    <PortfolioText 
                    text="We carried out a project for Arboreal, which is a startup company in Umeå. Arboreal 
                    is developing an application for measuring the base area of a forest, which means that you get 
                    the number of square meters of trees on one hectare. The app is exclusive to iOS and uses 
                    iPhone's built-in AR functionality to make the measurements needed. The application's 
                    functionality is already developed by Arboreal, but they wanted help with the design of 
                    appearance and flow through the application, which became our project." />
                    <PortfolioImage img="/arboreal-design1.png"/>
                    <PortfolioTitle title="Background"/>
                    <PortfolioText 
                    text="As a forest owner or manager, it is a big part of the job to measure the forest, or more 
                    specifically the trees in the forest. To get an idea of ​​how much volume of wood there is
                    in the forest, different methods are used. More specifically, you measure the height and a 
                    so-called base area to obtain a value in volume / hectare. Those who today work with measuring 
                    forests for various reasons, use either ancient tools that only work if you are very experienced, 
                    or very expensive equipment that is not particularly intuitive to use. The need for a smoother 
                    and more user-friendly solution is great." />
                    <PortfolioText 
                    text="One company that is working on just such a solution is Arboreal, which is developing an 
                    application for the iPhone to fill the need. To get help with the design, they contacted the 
                    digital agency Daresay, which we (re: Group) had contacted for the course DBT. Daresay thought 
                    the project seemed perfect for us to work on and did the introduction." />
                    <PortfolioImage img="/arboreal-design2.png"/>
                    <PortfolioTitle title="Goal"/>
                    <PortfolioText 
                    text='Our goal during the development of the new app was to focus on user-friendliness and a clear and self-explanatory flow. We identified two different main target groups, the professional 
                    forest managers who perform measurements daily, but also lay people who want to measure more 
                    "for fun". Our surveys showed that both target groups had a fairly low “app habit”, which we took 
                    into account during our work. Some parts of the measurement flow require previous knowledge in the 
                    field to understand what is being done and we solve this by giving the user the opportunity to
                    get more information via fact boxes that can be opened when needed.' />
                    <PortfolioTitle title="My role"/>
                    <PortfolioText 
                    text="The role as project manager has mostly been to ensure that communication between Daresay 
                    and Arboreal was managed, make sure we have meetings with each other in the project group, 
                    to end up on schedule, and make sure that we made progress on the days we reserved for 
                    the DBT course. I enjoy having a more administrative role as I have a bit of experience in it 
                    from previous projects, organizations, and jobs." />
                    <PortfolioText 
                    text="I really enjoy woking with the design, so this project has given me opportunity to 
                    improve on that front as well as try to produce a design proposal in one larger group. The fact 
                    that we have been a group of five with strong wills has had many pros and cons for this particular 
                    project. It has been difficult to sit with design when we in the group often thought differently, 
                    but it has contributed to us having many interesting discussions" />
                    <PortfolioText text='The picture below is of the project group consisting of Albin Frick, 
                    Jonathan Hedlund, Linus Ström, Oscar Heimdahl, Jonathan Smedborn, and Johan Ekenstedt 
                    from Arboreal.' />
                    <PortfolioImage img="/arboreal-group.jpeg"/>
                </div>
            </div>
        </div>
    )
}

export default arboreal
