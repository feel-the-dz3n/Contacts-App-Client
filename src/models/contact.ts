export default interface ContactModel {
  id: number;
  firstName: string;
  lastName: string | null;
  mobilePhone: string | null;
  workPhone: string | null;
  birthday: string | null; // can be used to count age
  nickname: string | null;
}
