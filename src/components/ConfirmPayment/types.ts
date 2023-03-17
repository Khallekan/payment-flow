export type ConfirmPaymentType = React.FC<{
  changeStage: () => void;
  onCancel(): void;
  isNext: boolean;
}>;