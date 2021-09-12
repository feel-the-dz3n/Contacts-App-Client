export default interface ContactModel {
  id: number;
  firstName: string;
  lastName: string | null;
  mobilePhone: string | null;
  workPhone: string | null;
  birthday: Date | null; // can be used to count age
  nickname: string | null;
}
