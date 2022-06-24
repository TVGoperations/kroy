import defaultResolve, {
  PublishAction,
  DiscardChangesAction,
  DeleteAction,
  DuplicateAction,
} from "part:@sanity/base/document-actions";
import { FiEye } from "react-icons/fi";

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
const localURL = "http://localhost:3000";
const baseUrl = window.location.hostname === "localhost" ? localURL : "https://kroy.vercel.app";

const singletons = ["hero", "footer", "settingsGeneral", "settingsSeo"];
const editAndDelete = [];
const previews = ["homePage"];

const PreviewAction = (props) => {
  const slug = props.draft ? props.slug?.current : props.published?.slug?.current;

  return {
    label: "Open Preview",
    icon: FiEye,
    onHandle: () => {
      window.open(`${baseUrl}/api/preview?token=${previewSecret}&type=${props.type}&slug=${slug || ""}`);
    },
  };
};

export default function resolveDocumentActions(props) {
  const isSingle = singletons.indexOf(props.type) > -1;
  const canEditDelete = editAndDelete.indexOf(props.type) > -1;
  const canPreview = previews.indexOf(props.type) > -1;

  if (isSingle) {
    return [PublishAction, DiscardChangesAction, ...(canPreview ? [PreviewAction] : [])];
  }

  if (canEditDelete) {
    return [PublishAction, DiscardChangesAction, DuplicateAction, DeleteAction, ...(canPreview ? [PreviewAction] : [])];
  }

  return [...defaultResolve(props), ...(canPreview ? [PreviewAction] : [])];
}
