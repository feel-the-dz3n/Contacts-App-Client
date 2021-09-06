export default interface ContactModel {
  id: number;
  firstName: string;
  lastName: string | undefined;
  mobilePhone: string | undefined;
  workPhone: string | undefined;
  birthday: Date | undefined; // can be used to count age
  nickname: string | undefined;
}
