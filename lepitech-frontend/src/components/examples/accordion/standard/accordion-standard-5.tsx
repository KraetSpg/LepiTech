import { faker } from "@faker-js/faker";
import { FileText, Folder, Settings, Users } from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Icon";

const icons = [FileText, Folder, Settings, Users];

const data: {
  value: string;
  title: string;
  content: string;
  icon: ReactNode;
}[] = [];

/*const data = [
  {
    value: "files",
    title: "Dateien",
    content: "Hier kannst du alle hochgeladenen Dateien verwalten.",
    icon: <FileText className="size-4 text-muted-foreground" />,
  },
  {
    value: "folders",
    title: "Ordner",
    content: "Organisiere deine Inhalte in Ordnern.",
    icon: <Folder className="size-4 text-muted-foreground" />,
  },
  {
    value: "users",
    title: "Benutzer",
    content: "Verwalte Benutzer und deren Berechtigungen.",
    icon: <Users className="size-4 text-muted-foreground" />,
  },
  {
    value: "settings",
    title: "Einstellungen",
    content: "Passe die Anwendung an deine Bedürfnisse an.",
    icon: <Settings className="size-4 text-muted-foreground" />,
  },
];*/


for (let i = 0; i < 4; i++) {
  const Icon = icons[i];
  data.push({
    value: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
    icon: <Icon className="size-4 text-muted-foreground" />,
  });
}

const Example = () => (
  <Accordion
    className="-space-y-px w-full"
    collapsible
    defaultValue={data[0].value}
    type="single"
  >
    {data.map((item) => (
      <AccordionItem
        className="overflow-hidden border bg-background px-4 first:rounded-t-lg last:rounded-b-lg last:border-b"
        key={item.value}
        value={item.value}
      >
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-left">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ps-7">
          <p className="text-muted-foreground">{item.content}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
