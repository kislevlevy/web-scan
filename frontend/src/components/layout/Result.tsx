// imports
import { useAppContext } from "@/context/AppContext";
import { Card, CardContent, CardHeader } from "../ui/card";
import React from "react";
import { Badge } from "../ui/badge";

// slugify
const slugify = (ele: string) =>
  ele.split(":")[0].toLowerCase().replace(/ /g, "-");

// component
export default function Result() {
  // retrive context state
  const { result, setError } = useAppContext();

  // return empty react fragment
  if (!result || result.failed) {
    if (result?.failed) setError("Unable to access scan on this site.");
    return <></>;
  }

  // destructure the relevant fields from the scan result
  const { url, a, aaaa, cname, title, status_code, webserver, tech } = result;

  return (
    <div className="flex flex-wrap justify-center mt-10 gap-3">
      <ResultCard title="General Information">
        {url && <Tag {...{ title: "Domain", data: url }} />}
        {a && <Tag {...{ title: "IPv4 Address", data: a }} />}
        {aaaa && <Tag {...{ title: "IPv6 Address", data: aaaa }} />}
        {cname && <Tag {...{ title: "CNAME Records", data: cname }} />}
      </ResultCard>
      <ResultCard title="Webpage Details">
        {title && <Tag {...{ title: "Title", data: title }} />}
        {status_code && (
          <Tag {...{ title: "HTTP Status Code", data: status_code }} />
        )}
        {webserver && <Tag {...{ title: "Web Server", data: webserver }} />}
      </ResultCard>
      {tech && (
        <ResultCard title="Technology Stack">
          <div className="flex flex-wrap justify-center gap-0.5">
            {tech.map((ele: string) => (
              <Badge className="bg-slate-700 text-white" key={ele}>
                <img
                  onError={(e) =>
                    (e.target as HTMLImageElement).classList.add("hidden")
                  }
                  height={20}
                  width={20}
                  src={`https://cdn.simpleicons.org/${slugify(ele)}/white`}
                />
                {ele.replace(":", " ")}
              </Badge>
            ))}
          </div>
        </ResultCard>
      )}
    </div>
  );
}

// helper components
function ResultCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="dark w-92 bg-slate-800/90 border-slate-700">
      <CardHeader className="text-center font-bold">{title}</CardHeader>
      <CardContent>
        <div>{children}</div>
      </CardContent>
    </Card>
  );
}

function Tag({ title, data }: { title: string; data: string | string[] }) {
  return (
    <div>
      <b>{title} - </b>
      {Array.isArray(data) ? (
        <div className="inline space-x-0.5">
          {data.map((ele) => (
            <Badge className="bg-slate-700 text-white" key={ele}>
              {ele}
            </Badge>
          ))}
        </div>
      ) : (
        data
      )}
    </div>
  );
}
