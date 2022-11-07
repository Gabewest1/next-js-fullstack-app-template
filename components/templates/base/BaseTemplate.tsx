export interface IBaseTemplate {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => (
  <div>{sampleTextProp}</div>
)

export default BaseTemplate
