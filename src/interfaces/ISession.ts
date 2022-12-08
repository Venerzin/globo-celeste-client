export default interface ISession{
    token: string;
    user: {
        id: string;
        name: string;
    }
}