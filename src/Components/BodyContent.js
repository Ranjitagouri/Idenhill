import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';

import Icons from './Icons';       
 import Icons1 from './Icons1';     // Correct import assuming this is Icons1.js
 import Icons2 from './Icons2';     // Correct import assuming this is Icons2.js
import BodyHead from './BodyHead';

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <Icons />
                <BodyHead/>
            </InnerLayout>
             <Icons1 />
            <Icons2 />
        </BodyContentStyled> 


    )
}

const BodyContentStyled = styled.div`

    }
`;

export default BodyContent;
