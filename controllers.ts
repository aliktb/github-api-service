import { getMyAPI } from './githubservice';
import ContributionResponse from './contributions';

const getUser= async (req: any, res: any) => {

    console.log(await getMyAPI());

    const todaysContributions = await getMyAPI();

    const myRes = new ContributionResponse(todaysContributions);

    res.status(200).send(myRes);

}


export default {getUser};
