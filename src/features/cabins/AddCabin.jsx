import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";
import { useState } from "react";

export function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form"></Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table"></Modal.Window> */}
    </Modal>
  );

  // const [isOpenModal, setIsOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => setIsOpenModal((show) => !show)}>
  //       Add new cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onCloseModal={() => setIsOpenModal(false)}>
  //         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}
