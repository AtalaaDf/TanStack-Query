import BentoCard from "@/components/common/BentoCard";

function DashboardPage(){
    return(
        <div className="grid grid-cols-4 gap-4 p-8">
            <div className="col-span-2 row-span-2">
                <BentoCard>
                    Profil
                </BentoCard>
            </div>
            <div className="col-span-2">
                <BentoCard>
                    Skill
                </BentoCard>
            </div>
            <div className="row-span-1">
                <BentoCard>
                    Project
                </BentoCard>
            </div>
            <div className="row-span-1">
                <BentoCard>
                    Contact
                </BentoCard>
            </div>
        </div>
    )
}

export default DashboardPage