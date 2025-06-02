// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const users: User[] = [
  { id: 1, name: "Alice Smith", email: "alice.smith@example.com", password: "password1", phoneNumber: "555-0101" },
  { id: 2, name: "Bob Johnson", email: "bob.johnson@example.com", password: "password2", phoneNumber: "555-0102" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", password: "password3", phoneNumber: "555-0103" },
  { id: 4, name: "David Lee", email: "david.lee@example.com", password: "password4", phoneNumber: "555-0104" },
  { id: 5, name: "Eva Green", email: "eva.green@example.com", password: "password5", phoneNumber: "555-0105" },
  { id: 6, name: "Frank Miller", email: "frank.miller@example.com", password: "password6", phoneNumber: "555-0106" },
  { id: 7, name: "Grace Kim", email: "grace.kim@example.com", password: "password7", phoneNumber: "555-0107" },
  { id: 8, name: "Henry Clark", email: "henry.clark@example.com", password: "password8", phoneNumber: "555-0108" },
  { id: 9, name: "Ivy Turner", email: "ivy.turner@example.com", password: "password9", phoneNumber: "555-0109" },
  { id: 10, name: "Jack White", email: "jack.white@example.com", password: "password10", phoneNumber: "555-0110" },
  { id: 11, name: "Karen Young", email: "karen.young@example.com", password: "password11", phoneNumber: "555-0111" },
  { id: 12, name: "Leo King", email: "leo.king@example.com", password: "password12", phoneNumber: "555-0112" },
  { id: 13, name: "Mia Scott", email: "mia.scott@example.com", password: "password13", phoneNumber: "555-0113" },
  { id: 14, name: "Noah Adams", email: "noah.adams@example.com", password: "password14", phoneNumber: "555-0114" },
  { id: 15, name: "Olivia Baker", email: "olivia.baker@example.com", password: "password15", phoneNumber: "555-0115" },
  { id: 16, name: "Paul Harris", email: "paul.harris@example.com", password: "password16", phoneNumber: "555-0116" },
  { id: 17, name: "Quinn Evans", email: "quinn.evans@example.com", password: "password17", phoneNumber: "555-0117" },
  { id: 18, name: "Ruby Nelson", email: "ruby.nelson@example.com", password: "password18", phoneNumber: "555-0118" },
  { id: 19, name: "Sam Carter", email: "sam.carter@example.com", password: "password19", phoneNumber: "555-0119" },
  { id: 20, name: "Tina Perez", email: "tina.perez@example.com", password: "password20", phoneNumber: "555-0120" },
  { id: 21, name: "Uma Reed", email: "uma.reed@example.com", password: "password21", phoneNumber: "555-0121" },
  { id: 22, name: "Victor Bell", email: "victor.bell@example.com", password: "password22", phoneNumber: "555-0122" },
  { id: 23, name: "Wendy Cox", email: "wendy.cox@example.com", password: "password23", phoneNumber: "555-0123" },
  { id: 24, name: "Xander Diaz", email: "xander.diaz@example.com", password: "password24", phoneNumber: "555-0124" },
  { id: 25, name: "Yara Fox", email: "yara.fox@example.com", password: "password25", phoneNumber: "555-0125" },
  { id: 26, name: "Zane Gray", email: "zane.gray@example.com", password: "password26", phoneNumber: "555-0126" },
  { id: 27, name: "Amy Hall", email: "amy.hall@example.com", password: "password27", phoneNumber: "555-0127" },
  { id: 28, name: "Ben Irwin", email: "ben.irwin@example.com", password: "password28", phoneNumber: "555-0128" },
  { id: 29, name: "Cora James", email: "cora.james@example.com", password: "password29", phoneNumber: "555-0129" },
  { id: 30, name: "Dylan Kim", email: "dylan.kim@example.com", password: "password30", phoneNumber: "555-0130" },
  { id: 31, name: "Ella Lewis", email: "ella.lewis@example.com", password: "password31", phoneNumber: "555-0131" },
  { id: 32, name: "Finn Moore", email: "finn.moore@example.com", password: "password32", phoneNumber: "555-0132" },
  { id: 33, name: "Gina Nash", email: "gina.nash@example.com", password: "password33", phoneNumber: "555-0133" },
  { id: 34, name: "Hugo Owen", email: "hugo.owen@example.com", password: "password34", phoneNumber: "555-0134" },
  { id: 35, name: "Isla Price", email: "isla.price@example.com", password: "password35", phoneNumber: "555-0135" },
  { id: 36, name: "Jake Quinn", email: "jake.quinn@example.com", password: "password36", phoneNumber: "555-0136" },
  { id: 37, name: "Kara Ross", email: "kara.ross@example.com", password: "password37", phoneNumber: "555-0137" },
  { id: 38, name: "Liam Stone", email: "liam.stone@example.com", password: "password38", phoneNumber: "555-0138" },
  { id: 39, name: "Mona Tate", email: "mona.tate@example.com", password: "password39", phoneNumber: "555-0139" },
  { id: 40, name: "Nina Underwood", email: "nina.underwood@example.com", password: "password40", phoneNumber: "555-0140" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  res.status(200).json(users);
}
