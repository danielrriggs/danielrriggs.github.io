import style from "./styles/backlinks.scss"
import { SmartConnectionsLogic } from "../util/smart-connections-logic";
import { classNames } from "../util/lang";
import { i18n } from "../i18n";
import { resolveRelative } from "../util/path";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";

interface ResultVM {
  slug: string;
  similarity: number;
}

const SmartConnections: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    cfg,
    allSmartConnectionEmbeddings
  }: QuartzComponentProps) => {
    const smartConnLogic = new SmartConnectionsLogic();
    
    const results = smartConnLogic.findConnections(allSmartConnectionEmbeddings, fileData.relativePath?.toString());

    const resultVMs = allFiles.filter(allFile => results.some(resultFile => resultFile.filePath === allFile.relativePath)).map(allFile => {
      const thisResult = results.find(result => result.filePath === allFile.relativePath);
      return {
        slug: allFile.slug,
        similarity: Math.round((thisResult?.similarity + Number.EPSILON) * 100)
      } as ResultVM;
    })

    resultVMs.sort(function (a: ResultVM, b: ResultVM) {
      return b.similarity - a.similarity;
  });
  
    return (
      <div class={classNames(displayClass, "backlinks")}>
      <h3>{i18n(cfg.locale).components.similarity.title}</h3>
      {<ul class="overflow">
        {resultVMs?.length > 0 ? (
          resultVMs?.map((vm) => (
            <li>
              {vm.similarity}% | <a href={resolveRelative(fileData.slug!, vm.slug!)} class="internal">
              {vm.slug}
              </a>
            </li>
          ))
        ) : (
          <li>{i18n(cfg.locale).components.similarity.noSimilaritiesFound}</li>
        )}
      </ul>}
    </div>
    )
  }
  
  SmartConnections.css = style
  export default (() => SmartConnections) satisfies QuartzComponentConstructor
