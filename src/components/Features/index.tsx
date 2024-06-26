import React from 'react';
import styles from "./Features.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import AnimationPart from "../Services/AnimationService";
import ResponsiveService from "@/components/Services/ResponsiveService";

const Features = () => {
    return (
        <div className={styles.Features} id={"features"}>
            <div className="container">
                <div className={styles.topPart}>
                    <SubLine
                        colorLine={"black"}
                        colorTitle={"primary"}
                        title={"DESIGN FOR THE FUTURE"}
                    />

                    <Typography
                        className={styles.title}
                        element={"h2"}
                        size={83}
                        weight={"normal"}
                        color={"primary"}
                        letterSpacing={2}
                        lineHeight={90}
                    >
                        Features that
                        elevate your work.
                    </Typography>
                </div>
            </div>
            <AnimationPart/>
            <ResponsiveService/>
        </div>
    );
};

export default Features;