import { useDispatch, useSelector } from "react-redux";
import type { DispatchType, RootStateType } from "./store";

export const useAppSelector = useSelector.withTypes<RootStateType>();
export const useAppDispatch = useDispatch.withTypes<DispatchType>();
