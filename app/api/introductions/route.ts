import { handlePortalPost } from "@/lib/portal-intake";

export async function POST(request: Request) {
  return handlePortalPost(request, {
    fields: [
      { name: "name", label: "Name", required: true, maxLen: 200 },
      { name: "org", label: "Company", maxLen: 200 },
      { name: "email", label: "Email", required: true, maxLen: 200 },
      { name: "msg", label: "Message", required: true, maxLen: 4000 },
    ],
    subject: (f) => `Introduction request: ${f.name}${f.org ? ` (${f.org})` : ""}`,
  });
}
